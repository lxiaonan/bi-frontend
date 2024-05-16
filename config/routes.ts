export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
    ],
  },
  { path: '/', redirect: '/my_chart' },
  // { path: '/add_chart', name: '智能分析(同步)', icon: 'barChart', component: './AddChart' },
  {
    path: '/add_chart_async',
    name: '智能分析',
    icon: 'projectTwoTone',
    component: './AddChartAsync',
  },
  { path: '/image_analysis', name: '图片分析', icon: 'fileImageTwoTone', component: './AddImage' },
  { path: '/image_create', name: '图片生成', icon: 'bulbTwoTone', component: './CreateImage' },
  {
    path: '/text_analysis',
    name: '文字识别',
    icon: 'fileTextTwoTone',
    component: './TextAnalysis',
  },
  { path: '/my_chart', name: '我的图表', icon: 'pieChartTwoTone', component: './MyChart' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
