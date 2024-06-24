module.exports = {
    apps: [{
      name: "xiaoIce",
      script: "npm",
      args: "run start",
      watch: true, // 可选的，监控代码变化自动重启
      max_memory_restart: "350M" // 设置内存限制 
    }]
};