<template>
  <div class="home">
    <div class="header">
      <h1>Goals</h1>
    </div>
    <div class="completed">
      <h3>Completed goals: {{completed}} </h3>
    </div>
    <div class="goals" v-for="goal in goals" :key="goal.id">
      <div class="goal">
        <font-awesome-icon icon="bullseye"/>
        <h3>{{goal.title}}</h3>
        <p>{{goal.description}}</p>
      </div>
      <div class="buttons">
        <button @click="deleteGoal(goal)">Delete Goal</button>
        <button @click="complete(goal)">DONE</button>
      </div>
    </div>
    <div class="footer">
      <a href="https://github.com/EthanWhittier/creative-4">GitHub</a>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      goals: [],
      completed: 0
    }
  },
  created() {
    this.getGoals();
    this.getCompleted();
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
    async getCompleted() {
      try {
        let response = await axios.get("/api/completed");
        this.completed = response.data.length;
      } catch (error) {
        //ERROR
      }
    },
    async complete(goal) {
      try {
        await axios.post('/api/complete');
        this.completed += 1;
        this.deleteGoal(goal);
      } catch(error) {
        //Errro
      }
    },
    async deleteGoal(goal) {
      try {
        await axios.delete('/api/deletegoal/' + goal._id);
        this.getGoals();
      } catch(error) {
          //ERROR
      }
    },
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

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}


</style>