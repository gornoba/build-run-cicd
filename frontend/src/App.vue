<script setup lang="ts">
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'

type List = {
  id: number
  comment: string
}

const lists = ref<List[]>([])
const inputValue = ref()

onBeforeMount(() => {
  axios.get('/api/lists/values').then((result) => {
    lists.value = result.data
  })
})

const submitHandler = () => {
  axios
    .post('/api/lists/value', {
      value: inputValue.value
    })
    .then((response) => {
      if (response.data.success) {
        console.log('response.data', response.data)
        inputValue.value = ''
      } else {
        alert('값을 DB에 넣는데 실패했습니다.')
      }
    })
}
</script>

<template>
  <div className="App">
    <header className="App-header">
      <img src="@/assets/logo.svg" className="App-logo" alt="logo" />
      <div className="container" @submit="submitHandler">
        <li v-for="(value, index) in lists" :key="index">
          {{ value.comment }}
        </li>
        <br />

        <form className="example">
          <input v-model="inputValue" type="text" placeholder="입력해주세요..." />
          <button type="submit">확인.</button>
        </form>
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 375px;

  form.example {
    input {
      padding: 10px;
      font-size: 17px;
      border: 1px solid grey;
      float: left;
      width: 80%;
      background: #f1f1f1;
    }

    button {
      float: left;
      width: 20%;
      padding: 10px;
      background: #2196f3;
      color: white;
      font-size: 17px;
      border: 1px solid grey;
      border-left: none;
      cursor: pointer;

      &:hover {
        background: #0b7dda;
      }
    }

    &::after {
      content: '';
      clear: both;
      display: table;
    }
  }
}
</style>
