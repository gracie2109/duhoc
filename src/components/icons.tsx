
type IconProps = React.HTMLAttributes<SVGElement>
import {CircleUserRound, BellDot, LayoutGrid, UserRoundIcon, Newspaper,
    Cat,  Dog, Fish, Bird,Bone,Egg,PawPrint,Rabbit,Rat,Snail,Shell,Squirrel,Turtle, Store,Info, TagsIcon,Package
} from "lucide-react"

export const Icons = {
    google: (props: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            />
        </svg>
    ),
    googleColor: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}
             id="google">
            <path fill="#fbbb00"
                  d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"></path>
            <path fill="#518ef8"
                  d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"></path>
            <path fill="#28b446"
                  d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"></path>
            <path fill="#f14336"
                  d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"></path>
        </svg>
    ),
    apple: (props: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                fill="currentColor"
            />
        </svg>
    ),
    paypal: (props: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                fill="currentColor"
            />
        </svg>
    ),
    spinner: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
    ),
    gitHubColor: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
            <path
                d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
        </svg>
    ),

    phoneCircleColorRegualar: (props: IconProps) => (
        <>
            <svg  {...props} fill="#16A1ff" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 22.3749 33.5312 C 27.8358 39.0156 34.7968 42.4844 38.9218 38.3828 C 39.0858 38.2188 39.2030 38.0781 39.3202 37.9141 C 40.3983 36.7188 40.7030 35.1250 39.3202 34.0937 C 38.2421 33.3203 37.0936 32.5234 35.1483 31.1641 C 33.7890 30.2031 32.8983 30.4375 31.8436 31.4922 L 30.9062 32.4063 C 30.6249 32.6641 30.1796 32.6406 29.8749 32.4531 C 29.0546 31.9609 27.6718 30.8594 26.3593 29.5469 C 25.0702 28.2578 23.8983 26.8047 23.4530 26.0312 C 23.2890 25.7734 23.1718 25.3516 23.4999 25.0469 L 24.4140 24.0625 C 25.4687 22.9609 25.7030 22.1172 24.7187 20.7344 L 21.8358 16.6563 C 20.8514 15.2734 19.4218 15.5312 17.8514 16.7031 C 17.7343 16.7968 17.6405 16.8906 17.5468 16.9844 C 13.4218 21.1094 16.9140 28.0703 22.3749 33.5312 Z"/>
            </svg>
        </>
    ),
    mailCircleColorRegualar: (props: IconProps) => (
        <svg {...props} fill="#16A1ff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M16 8H8C7.45 8 7.005 8.45 7.005 9L7 15C7 15.55 7.45 16 8 16H16C16.55 16 17 15.55 17 15V9C17 8.45 16.55 8 16 8ZM8.00001 9.99997L12 12.5L16 9.99997V15H8.00001V9.99997ZM8.00001 9.00001L12 11.5L16 9.00001H8.00001Z"
                  fill="#16A1ff"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                  fill="#16A1ff"/>
        </svg>
    ),
    facebookCircleColorRegualar: (props: IconProps) => (
        <svg  {...props} fill="#16A1ff" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d='M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937z'/>
            <path
                d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z'/>
        </svg>
    ),
    facebookSolid: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="#16A1ff"  viewBox="0 0 512 512">
            <path
                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
        </svg>
    ),
    mailSolid: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"  {...props} fill="#16A1ff"
             viewBox="0 0 512 512">
            <path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
        </svg>
    ),
    avatar: CircleUserRound,
    notifications:BellDot,
    layout_grid: LayoutGrid,
    user_round:UserRoundIcon,
    new_paper:Newspaper,
    Cat,
    Dog,
    Fish,
    Bird,
    Bone,
    Egg,
    PawPrint,
    Rabbit,
    Rat,
    Snail,
    Shell,
    Squirrel,
    Turtle,
    Store,
    Info,
    TagsIcon,
    Package
}