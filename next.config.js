/** @type {import('next').NextConfig} */
// 更改为静态导出为dist文件夹，与其他项目打包同理
const nextConfig = {
    images: {
        // 旧配置
        // domains: ['i.p-i.vip'], 
        // 新配置
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.p-i.vip',
            port: '',
            pathname: '/**',
          },
        ],
      },
    //output: 'export',
    //distDir: "dist",
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig
