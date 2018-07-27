<template>
  <div id="app">
    <div id="nav">
      <router-link to="/purecss">PureCss</router-link> |
      <router-link to="/data">Vue</router-link>
    </div>
    <router-view/>
  <div class="data">
    <h1>Fake Data Test</h1>
    <div class="content">
      <table class="pure-table dataTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item 1</th>
            <th>Item 2</th>
            <th>Item 3</th>
            <th>Item 4</th>
            <th>Item 5</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(d, index) in testData" :key="`${d.ID}${d.Item1}${index}`"
          >
            <td>{{ d.ID }}</td>
            <td>{{ d.Item1 }}</td>
            <td>{{ d.Item2 }}</td>
            <td>{{ d.Item3 }}</td>
            <td>{{ d.Item4 }}</td>
            <td>{{ d.Item5 }}</td>
            <td>{{ d.Status }}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  </div>
  </div>
</template>

<script>
import api from './promise5000.js'

export default {
  data() {
    return {
      testData: [
      ]
    };
  },
  mounted() {
    api.myFirstPromise.then((data) => {
      this.testData = data;
    });
  }
};
</script>


<style lang="scss">
  @import '../node_modules/purecss/build/pure-min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
