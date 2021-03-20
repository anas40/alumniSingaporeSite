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
        }, {
            tag: "Constitution",
            href: 'https://www.docdroid.net/5r58bIe/constitution-amuaas-approved-by-ros-24aug2020-final-version-pdf',
            icon: 'AiFillBook',
            new:'yes'
        }, {
            tag: "Donate",
            href: '/donate',
            icon: 'BiDonateHeart'
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