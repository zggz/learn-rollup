# learn-rollup

### defineConfig
主要是解决.js 无法获取提示的问题。rollup.config.ts 会有错误无法运行
- 使用该api [[bundle.ejs.js](dist%2Fejs%2Fbundle.ejs.js)bundle.ejs.js](dist%2Fejs%2Fbundle.ejs.js)可以获得更好的代码提示，也是官方推荐的写法

### 配置
- output.banner/footer 插入描述
- name 输出格式为iife、umd的时候，可以通过这个name访问导出

### rollup-plugin-dts
- 生成types文件

