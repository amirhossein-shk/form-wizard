<template>
  <div v-show="isActive"><slot></slot></div>
</template>

<script>
    export default {
        name: "Tab",
        props: {
            selected: {
                default: false,
                type: Boolean,
            }
        },
        data () {
            return {
                isActive: false
            }
        },
        methods: {
            assignSelected () {
                this.isActive = this.selected
            }
        },
        created () {
            this.assignSelected()
        },
        watch: {
            'selected': 'assignSelected'
        }
    }
</script>

<style scoped>

</style>
