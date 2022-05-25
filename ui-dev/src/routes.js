import CarsList from './pages/CarsList.svelte'
import PresentationOutline from './pages/PresentationOutline.svelte'

export const routes = [
    {
        name: '/',
        component: CarsList
    },
    {
        name: 'presentation',
        component: PresentationOutline
    }
]

