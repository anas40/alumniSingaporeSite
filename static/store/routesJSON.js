export default [
    {
        tag: "Home",
        icon: 'FaHome',
        href: "/",
        sub: []
    }, {
        tag: "Events ",
        href: "/events",
        icon: 'MdEvent',
        sub: []
    }, {
        tag: "About AMUAAS",
        icon: 'GoInfo',
        sub: [{
            tag: "Words from President",
            href: '/wordsFromPresident',
            icon: 'GoPerson'
        }, {
            tag: "Contact Us",
            href: '/contactUs',
            icon: 'MdContactPhone'
        }]
    }, {
        tag: "Meet Our Teams",
        icon: 'FaHandshake',
        sub: [{
            tag: "Executive Committee",
            href: '/executiveCommittee',
            icon: 'RiTeamFill'
        }, {
            tag: "Working Committee",
            href: '/workingCommittee',
            icon: 'BsFillPeopleFill'
        }]
    }

]