import Wrapper from "../Layouts/Wrapper";
import { Tab } from "@headlessui/react";
import Scottsdale from "../components/Projects/Scottsdale";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const tabOptions = [
    {
        name: "Scottsdale Mint B2B",
        image: '/img/scottsdealers.jpg',
        content: 'Scottsdale Mint Dealer portal is a B2B web application for their clients to easily bulk order gold or silver with real time pricing. I have built the UI so customers can easily search, filter, and organize products they\'re acquiring. Also created custom elementor widgets so the client can easily customize their web pages as they see fit.',
        url: 'https://dealers.scottsdalemint.com/',
        tech: [
            'Wordpress',
            'Vue',
            'Tailwind',
            'PHP',
            'Elementor'
        ]
    },
    {
        name: "Lancaster Academy",
        image: '/img/lancaster.jpg',
        content: 'Lancaster Archery Academy is event booking website built with laravel, vue.js and tailwind css. I took a custom design (PSD) and sliced it into the laravel framework. Implemented custom widgets in the nova admin, created a event calender with event booking functionality and created a single page checkout.',
        url: 'https://www.lancasterarcheryacademy.com/',
        tech: [
            'Laravel',
            'Vue',
            'Tailwind',
            'Nova',
        ]

    },
    {
        name: "Scentlok",
        image: '/img/scentlok.jpg',
        content: 'Scentlok.com is an  ecommerce website built on magento 2. I took a custom photoshop design and sliced it into the CMS. Configured products. Added custom widgets and attributes to the admin panel so client can easily customize webpages and sections on the product display page.',
        url: 'https://www.scentlok.com/',
        tech: [
            'Magento',
            'Bootstrap',
        ]
    },
    {
        name: "Rival Arms",
        image: '/img/rivalarms.jpg',
        url: 'https://www.rival-arms.com/',
        content: 'Rival Arms is a ecommerce website built on bigcommerce. I created a custom theme using the bigcommerce stencil framework. Sliced design into new theme. Created custom api endpoints to receive data that cannot be added into the bigcommerce admin.',
        tech: [
            'Bigcommerce',
            'Headless',
            'Stencil',
            'Handlebars',
        ]
    },
    {
        name: "Truglo",
        image: '/img/truglo.jpg',
        url: 'https://www.truglo.com/',
        content: 'Truglo is a ecommerce website built on bigcommerce. I created a custom theme using the bigcommerce stencil framework. Sliced design into new theme. Created custom api endpoints to receive data that cannot be added into the bigcommerce admin.',
        tech: [
            'Bigcommerce',
            'Headless',
            'Stencil',
            'Wordpress',
        ]
    }
]

const Projects = () => {
    return (
        <Wrapper className="md:h-screen">
            <div className="flex justify-center flex-col md:flex-row">
                <Tab.Group>
                    <Tab.List className="flex-[0_0_300px] md:border-r border-color-1">
                        <div className="text-center text-[24px] font-bold text-color-1
                        uppercase pt-4 pb-2 border-b border-color-1">
                            My Projects
                        </div>
                        {tabOptions.map(tab => {
                            return (
                                <Tab
                                    key={tab.name}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full tab-border text-right uppercase pr-6 h-[60px] text-white text-xl',
                                            selected
                                                ? 'bg-color-1 text-white'
                                                : 'hover:bg-color-1 hover:text-white'
                                        )
                                    }
                                >
                                    {tab.name}
                                </Tab>
                            )
                        } )}
                    </Tab.List>
                    <Tab.Panels className="bg-color-2 flex flex-col justify-end pb-12">
                        {tabOptions.map(tab => <Tab.Panel key={tab.name}>
                            <Scottsdale
                                obj={tab}
                            />
                        </Tab.Panel>)}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </Wrapper>
    )
};

export default Projects;