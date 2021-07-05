export default {
  install(app, options) {
    let currentLang = 'ru';

    const changeCurrentLang = name => {
      currentLang = name
    }

    app.config.globalProperties.$alert = (message) => {
      window.alert(message)
    };

    // options[currentLang] === initial value
    //app: {
    //     title: 'en text',
    //     btn: 'toggle language'
    //   }

    app.config.globalProperties.$i18n = key => {
      const res = key.split('.')

      //res = ["app", "title"]
      // иттерация 1 =>
      //        - arrayElem = "app'"

      //        - words === options[currentLang] = app: {
      //           title: 'en text',
      //           btn: 'toggle language'
      //         }

      //        - return: { title: "en text", btn: 'toggle language'}

      // иттерация 2 =>  arrayElem = 'title'

      // const result = ["app", "title"].reduce((words, arrayElem) => {
      //   const res =  words[arrayElem]
      //   return res
      // }, { app: { title: "en text", btn: 'toggle language'}})
      // return result

      const callback = (initialValue, arrElem) => {
        console.log('initialValue', initialValue)
        console.log('arrElem',arrElem)
        const res = initialValue[arrElem]
        console.log('res:', res)
        return res
      }

      const result = res.reduce(callback, options[currentLang])
      return result
    }
    app.provide('i18nLang', changeCurrentLang)
  }
}