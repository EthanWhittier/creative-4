<template>
    <div class="edit">
        <div class="header">
      <h1>Edit Goals</h1>
      <h3>Edit a description, then choose which goal to apply the change to.</h3>
    </div>
    <input v-model="editText" type="text" placeholder="New Description">
    <div class="goals" v-for="goal in goals" :key="goal.id">
      <div class="goal">
        <font-awesome-icon icon="bullseye"/>
        <h3>{{goal.title}}</h3>
        <p>{{goal.description}}</p>
      </div>
      <div class="buttons">
        <button @click="editGoal(goal)">Edit!</button>
      </div>
    </div>
    <div class="footer">
      <a href="https://github.com/EthanWhittier/creative-4">Ethan Whittier - GitHub</a>
      </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            editText: '',
            goals: []
        }
    },
    created() {
        this.getGoals();
    },
    methods: {
       async getGoals() {
            try {
                let response = await axios.get("/api/goals");
                this.goals = response.data;
            } catch (error) {
                //Error
            }
        },
        async editGoal(goal) {
            try {
                await axios.put('/api/edit/' + goal._id, {
                    description: this.editText
                });
                this.editText = '';
                this.getGoals();
            } catch(error) {
                //Error
            }
        }
    }
}
</script>


<style scoped>
.goals {
  display: flex;
  flex-direction: column;
}

.goal {
  margin: auto;
  width: 50%;
  background-color: #016881;
  margin-top: 2em;
  padding: 1em;
  border-bottom: 5px solid #016881;
  border-radius: 15px;
  color: black;
  display: flex;
  margin-bottom: .5em;
}

.goal h3 {
  margin: 0 .5em;
}

.header {
  margin: 1em;
}

button {
  background-color: #c7c7c7; /* Green */
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 25%;
  border-radius: 15px;
  margin: auto;
  margin: .25em;
}

input[type=text] {
  width: 20%;
  padding: 10px 20px;
  margin: 1em;
  box-sizing: border-box;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

</style>