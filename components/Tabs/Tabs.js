// components/Tabs/Tabs.js
Component({
  /**
   * Component properties
   */
  properties: {

    aaa:{
      type:String,
      value:'',
    },
    tabs:{
      type:Array,
      value:[],
    }


  },

  /**
   * Component initial data
   */
  data: {

  


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

      this.setData({
        tabs
      })  

    },

  }
})
