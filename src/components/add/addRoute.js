import AddIndex from "./AddIndex"
import Radar from "./Radar.vue"
import FaceToFace from "./FaceToFace"
import PhoneFriend from "./PhoneFriend"
import Scan from "./Scan"
export const addRoute=[
    {
        path:"/addIndex",
        component: AddIndex
    },
    {
        path:"/radar",
        component: Radar
    },
    {
        path:"/faceToFace",
        component: FaceToFace
    },
    
    {
        path:"/phoneFriend",
        component: PhoneFriend
    },
    {
        path:"/scan",
        component: Scan
    }
]