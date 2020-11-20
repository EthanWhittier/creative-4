<template>
  <div class="post">
    <h1>Add a Goal</h1>
    <div class="add">
      <input type="text" v-model="newTitle" placeholder="Goal"/>
      <p></p>
      <textarea v-model="newDescription" placeholder="Description" size="50"/>
    </div>
    <button @click="postGoal()">Post</button>
    <div class="footer">
      <a href="https://github.com/EthanWhittier/creative-4">GitHub</a>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Post',
  data() {
    return {
      newTitle: "",
      newDescription: ""
    }
  },
  methods: {
    async postGoal() {
      try {
        await axios.post('/api/post', {
          title: this.newTitle,
          description: this.newDescription,
        });
      } catch (error)  {
          //Catch error
      }
      this.newTitle = "";
      this.newDescription = "";
    }
  }
}
</script>


<style scoped>

h1 {
  margin: .5em;
}

input[type=text] {
  width: 20%;
  padding: 10px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

textarea {
  width: 20%;
  padding: 10px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

button {
  background-color: #016881; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}
</style>
