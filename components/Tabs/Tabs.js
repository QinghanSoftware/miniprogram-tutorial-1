// components/Tabs/Tabs.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {

    tabs:[
      {
        id:0,
        name:"首页",
        isActive:true
      },
      {
        id:1,
        name:"原创",
        isActive:false
      },
      {
        id:2,
        name:"分类",
        isActive:false
      },
      {
        id:3,
        name:"关于",
        isActive:false
      },

    ]


  },

  /**
   * Component methods
   */
  methods: {

    handleItemTap(e){
      console.log(e);
      console.log(e.currentTarget.dataset.index)
      const index = e.currentTarget.dataset.index
      // console.log(this.data.tabs[index])

      // let {tabs} = this.data 也可以这样写。 p38教程中是这样的。
  
      let tabs = this.data.tabs 

      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);

      tabs.forEach(v => { 
        console.log(v.isActive)        
      });

      console.log(tabs)
      console.log(this.data.tabs)

    },

  }
})
