//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    viewList: [
      {
        logo: "/images/pro_01.jpg",
        title: "Title",
        desc: "Description"
      },
      {
        logo: "/images/pro_02.jpg",
        title: "Title",
        desc: "Description"
      },
      {
        logo: "/images/pro_03.jpg",
        title: "Title",
        desc: "Description"
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log("Hello")
  },

  /**
   * 显示详情
   */
  showDetails: function(e) {
    console.log(e);
  }
})
