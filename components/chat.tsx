"use client";

import Chat, { Bubble, useMessages } from '@chatui/core';
import "@chatui/core/dist/index.css";
import axios from 'axios';


const initialMessages = [
	{
	  type: 'text',
	  content: { text: '主人好，我是奥森小冰智能AI助手，有什么能为您服务的吗？' },
	  user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
	},
	{
	  type: 'image',
	  content: {
		picUrl: '//avg.png',
	  },
	},
];

const defaultQuickReplies = [
	{
	  icon: 'message',
	  name: '奥森小冰是什么？',
	  isNew: true,
	  isHighlight: true,
	},
];

export const ChatCompound = () => {
  const { messages, appendMsg, setTyping } = useMessages(initialMessages);

    // 发送回调
    const handleSend = (type, val) => {
      if (type === 'text' && val.trim()) {
        appendMsg({
          type: 'text',
          content: { text: val },
          position: 'right',
        });
  
        setTyping(true);
  
        axios.post('https://api.link-ai.tech/v1/chat/completions', {
          app_code: 'default',
          messages: [
            {
              role: 'user',
              content: val,
            }
          ]
        }, {
          headers: {
            'Authorization': 'Bearer Link_C7N5aWDbDAOJsiSUMX9YbDetDjyqMXD7BrqWUz10ig',
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          const replyContent = response.data.choices[0].message.content;
          appendMsg({
            type: 'text',
            content: { text: replyContent },
          });
        })
        .catch(error => {
          console.error('Error:', error);
        })
        .finally(() => {
          setTyping(false);
        });
      }
    };
  
    // 快捷短语回调，可根据 item 数据做出不同的操作，这里以发送文本消息为例
    function handleQuickReplyClick(item) {
      handleSend('text', item.name);
    }
  
    function renderMessageContent(msg) {
      const { type, content } = msg;
  
      // 根据消息类型来渲染
      switch (type) {
        case 'text':
          return <Bubble content={content.text} />;
        default:
          return null;
      }
    }
  
    return (
      <Chat
        navbar={{ title: '奥森小冰智能AI客服' }}
        messages={messages}
        renderMessageContent={renderMessageContent}
        quickReplies={defaultQuickReplies}
        onQuickReplyClick={handleQuickReplyClick}
        onSend={handleSend}
      />
    );
  }