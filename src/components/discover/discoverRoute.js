import Bottle from "./Bottle.vue"
import Common from "./Common.vue"
import Nearby from "./Nearby.vue"
import Shake from "./Shake.vue"
import Watch from "./Watch.vue"
import BottleContent from "./BottleContent.vue"
import BottleHistory from "./BottleHistory.vue"
export const discoverRoute=[{
    path:"/bottle",
    component:Bottle
},{
    path:"/common/:title",
    component:Common
},{
    path:"/nearby",
    component:Nearby
},{
    path:"/shake",
    component:Shake
},{
    path:"/watch",
    component:Watch
},{
    path:"/bottleContent",
    component:BottleContent
},{
    path:"/bottleHistory",
    component:BottleHistory
}]