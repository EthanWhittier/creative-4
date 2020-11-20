<template>
    <div class="wrapper">
        <h1 v-show="!submit">Contact</h1>
        <p v-show="!submit">Please email with any suggestions you may have!</p>
        <form class="form" v-if="!submit">
            <label for="name">Name:</label>
            <input type="text" v-model="name" id="name" name="name" placeholder="Name">
            
            <label for="suggest">Suggestion:</label>
            <input type="text"  v-model="suggestion" id="suggest" name="suggest" placeholder="Suggestion">

            <input type="submit" value="Submit" v-on:click="submitForm()">
        </form>
        <div class="footer">
      <a href="https://github.com/EthanWhittier/creative-4">Ethan Whittier - GitHub</a>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Contact',
    data() {
        return {
            submit: false,
            name: "",
            suggestion: "",
        }
    },
    methods: {
       async submitForm() {
            try {
                await axios.post('/api/contact', {
                    name: this.name,
                    suggestion: this.suggestion
                })
            } catch(error) {
                //error
            }
            this.submit = true;
        }
    }
}
</script>

<style scoped>

.form {
    width: 35%;
    margin: 1em auto;
    padding: 1.5em;
    background-color: #ebebeb;
}
.wrapper p, h1 {
    margin: 1em;
}
input[type=text] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc; 
  border-radius: 4px; 
  box-sizing: border-box;
  margin-top: 6px; 
  margin-bottom: 16px; 
}
input[type=submit] {
  background-color: #016881;;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}


</style>