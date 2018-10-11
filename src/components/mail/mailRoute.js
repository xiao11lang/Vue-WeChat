import NewFriend from "./NewFriend"
import Group from "./Group"
import Mark from "./Mark"
import Public from "./Public"
export const mailRoute=[
    {
        path:"/newFriend",
        component:NewFriend
      },
      {
        path:"/group",
        component:Group
      },
      {
        path:"/mark",
        component:Mark
      },
      {
        path:"/public",
        component:Public
      },
]