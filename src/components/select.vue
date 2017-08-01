<template>
    <select>
        <option v-for="item in options" :value="item.value">
            {{item.text}}
        </option>
    </select>
</template>

<script>
    export default{
      props:{options:Array},
    }
</script>