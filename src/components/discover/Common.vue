<template>
    <div class="common">
        <MailHeader :headerTitle="$route.params.title"></MailHeader>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader.vue"
export default {
    name:"Common",
    components:{
        MailHeader
    }
}
</script>
<style lang="scss">
    .common{}
</style>
