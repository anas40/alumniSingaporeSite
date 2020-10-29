export default [
    {
        tag: "Home",
        link: '',
        icon: 'FaHome',
        href: "/",
        sub: []
    }, {
        tag: "Events ",
        href: "/events",
        link: '',
        icon: 'MdEvent',
        sub: []
    }, {
        tag: "About AMUAAS",
        link: '',
        icon: 'GoInfo',
        sub: [{
            tag: "Words from President",
            link: '',
            icon: 'GoPerson',
            href:'/wordsFromPresident'
        }, {
            tag: "Contact Us",
            link: '',
            icon: 'MdContactPhone'
        }]
    }, {
        tag: "Meet Our Teams",
        link: '',
        icon: 'FaHandshake',
        sub: [{
            tag: "Executive Committee",
            link: '',
            icon: 'RiTeamFill'
        }, {
            tag: "Working Committee",
            link: '',
            icon: 'BsFillPeopleFill'
        }]
    }

]