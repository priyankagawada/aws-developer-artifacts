// change to your http url here..
const invokeUrl = 'https://jvxf442xb9.execute-api.ap-south-1.amazonaws.com/getfriends';


// Do not edit below this line

var app = new Vue({
  el: '#app',
  data() {
    return {
      loading: true,
      errored: false,
      friends: null
    }
  },
  mounted() {
    axios
      .get(invokeUrl)
      .then(response => {
        console.log(response)
        this.friends = response.data.friends
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})