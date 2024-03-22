import { z } from "zod"


//PAGE SETTING
export const pageSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    desc:z.string(),
    logo:z.any(),
    favicon:z.any(),
})

export const pageInit = {
    name:"",
    desc:"",
    logo:null,
    favicon:null
}

export type IPages = z.infer<typeof pageSchema>
export interface Pages extends IPages {
    id:string
}




