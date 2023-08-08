import { menuCountries } from './menuCountries'

export const menu = [
    {
        label: "Обо мне",
        key: "about",
    },

    {
        label: "Путешествия",
        key: "destinations",
        children: [menuCountries.europe, menuCountries.asia],
    },

    {
        label: (
            <a href="#" rel="noopener noreferrer">
                Видео
            </a>
        ),
        key: 'video',
    },

]