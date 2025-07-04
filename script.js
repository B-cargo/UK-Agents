document.addEventListener('DOMContentLoaded', function() {
    const agentsData = [
        // Two-way service agents (UK ⇄ Kurdistan)
        {
            city: "Croydon",
            name: "Vandon Removals",
            address: "UNIT 4 WEST, 2 MONTAGUE ROAD, CROYDON, CR0 3SS",
            contact: "+44 7899 728989",
            contactName: "",
            whatsapp: "+447899728989",
            postcode: "CR0 3SS",
            category: "london",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "London Harlesden",
            name: "London Harlesden Agent",
            address: "88 St Johns Avenue, Harlesden, London, NW10 4EG",
            contact: "+44 7392 455288",
            contactName: "Kak Karwan",
            whatsapp: "+447392455288",
            opening: "08:30 to 19:00",
            postcode: "NW10 4EG",
            category: "london",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Enfield",
            name: "North London Fruit & Veg",
            address: "27 Church Street, Enfield, EN2 6AQ",
            contact: "07897712038, 07931287878",
            contactName: "Gailan",
            whatsapp: "447897712038",
            postcode: "EN2 6AQ",
            category: "london",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "London Stratford",
            name: "Zb barber",
            address: "673 High Rd, Leytonstone, London, E11 4RD",
            contact: "07492822263",
            contactName: "Kak Zewar",
            whatsapp: "447492822263",
            postcode: "E11 4RD",
            category: "london",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Birmingham",
            name: "ANNE LOCAL",
            address: "62A ANNE ROAD, SMETHWICK, BIRMINGHAM, B66 2NY",
            contact: "07449008176",
            contactName: "Kak Dara",
            whatsapp: "447449008176",
            postcode: "B66 2NY",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Bolton",
            name: "",
            address: "141 MAYOR STREET, BOLTON, BL1 4SJ",
            contact: "07428814014",
            contactName: "Kak Renas",
            whatsapp: "447428814014",
            postcode: "BL1 4SJ",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Brighton",
            name: "",
            address: "2 ROCK STREET, BRIGHTON, BN2 1NF",
            contact: "07474432624 (Aram), 07491941496 (Ako)",
            contactName: "",
            whatsapp: "447474432624",
            postcode: "BN2 1NF",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Bristol",
            name: "Burgas European food",
            address: "313 two Mill Hill road, Bristol, BS151ap",
            contact: "+44 7763 795785",
            contactName: "K Shalaw wakil",
            whatsapp: "+447763795785",
            postcode: "BS151ap",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Cardiff",
            name: "Easy Shop",
            address: "165 City Road, CARDIFF, CF24 3BQ",
            contact: "07399 810664",
            contactName: "Kak Kaifi",
            whatsapp: "447399810664",
            postcode: "CF24 3BQ",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Coventry",
            name: "M&A Export",
            address: "145 foleshill Road, Coventry, Cv1 4Lf",
            contact: "07522 011514 (Ramzy), +44 7459 822243 (Narmand)",
            contactName: "",
            whatsapp: "447522011514",
            postcode: "CV1 4Lf",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Derby",
            name: "Sardam Travel",
            address: "176 Normanto Road, Derby, DE23 6UX",
            contact: "07404704692",
            contactName: "Kak Bakir",
            whatsapp: "447404704692",
            postcode: "DE23 6UX",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Doncaster",
            name: "Chicos Travel & Services",
            address: "5 Copley Road, Doncaster, DN1 2PE",
            contact: "Tel 01302879776, Mobile 07454545054",
            contactName: "",
            whatsapp: "447454545054",
            postcode: "DN1 2PE",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Edinburgh",
            name: "",
            address: "149 GRANTON ROAD, EDINBURGH, EH5 3NL",
            contact: "+44 7716 661099",
            contactName: "KaK Saiwan",
            whatsapp: "+447716661099",
            postcode: "EH5 3NL",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Glasgow",
            name: "SHOW MARKET",
            address: "1401 Maryhill Road, Glasgow, G20 9AA",
            contact: "+44 7727 266895",
            contactName: "Kak Mohammed",
            whatsapp: "+447727266895",
            postcode: "G20 9AA",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Huddersfield",
            name: "Awen mini markets",
            address: "6 bradford Road, Huddersfield, Hd1 6hy",
            contact: "07388653033",
            contactName: "Kak Sirwan",
            whatsapp: "447388653033",
            postcode: "HD1 6hy",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Hull",
            name: "INTERNATIONAL BARGAIN LINE FOOD STORE",
            address: "123 SPRING BANK, HU3 1BH",
            contact: "+44 738 368 8766",
            contactName: "Kak Sami",
            whatsapp: "+447383688766",
            postcode: "HU3 1BH",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Ipswich",
            name: "ELLIOT CARPRT",
            address: "14 ST. MATTHEWS STREET, IPSWICH, IP1 3EU",
            contact: "07550555559",
            contactName: "Kak Muhammad",
            whatsapp: "447550555559",
            postcode: "IP1 3EU",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Kent Warehouse",
            name: "",
            address: "Unit X, Paddock Wood Distribution Centre Transfesa Road, Paddock Wood, Kent, TN12 6UU",
            contact: "07722335573",
            contactName: "",
            whatsapp: "447722335573",
            postcode: "TN12 6UU",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Leeds",
            name: "AJRASS",
            address: "1 DOLLY LINE, LEEDS, LS9 7EB",
            contact: "+44 771 347 4140",
            contactName: "",
            whatsapp: "+447713474140",
            postcode: "LS9 7EB",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Leicester",
            name: "Akre Travel",
            address: "22 LEE CIRCLE, LEICESTER, LE1 3RE",
            contact: "07914169335",
            contactName: "Kak Hadi",
            whatsapp: "447914169335",
            postcode: "LE1 3RE",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Liverpool",
            name: "Fresh Holidays",
            address: "20 Lodge Lane, L8 0QH, Liverpool",
            contact: "07874224266",
            contactName: "Kak Bashdar",
            whatsapp: "447874224266",
            postcode: "L8 0QH",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Manchester",
            name: "B-Post and travel",
            address: "240A Furness Road, Wilmslow, Followfield, Manchester, M14 6LD",
            contact: "+44 7770 326288",
            contactName: "Mala nawzad",
            whatsapp: "+447770326288",
            postcode: "M14 6LD",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Middlesborough",
            name: "HERBIE HOUSE SUPPLIES",
            address: "83 Parliament Road, TS1 4JF",
            contact: "07981178457",
            contactName: "Kak Ahmad",
            whatsapp: "447981178457",
            postcode: "TS1 4JF",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Newcastle",
            name: "Mobile Tech NE",
            address: "288 Old Durham Road Gateshead, NE8 4BQ",
            contact: "07923005678",
            contactName: "K Mohammed",
            whatsapp: "447923005678",
            postcode: "NE8 4BQ",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Norwich",
            name: "WESTSIDE BARBERS",
            address: "564 Dereham Road, Norwich, NR5 8TU",
            contact: "07455759641",
            contactName: "Mohammad",
            whatsapp: "447455759641",
            postcode: "NR5 8TU",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Northampton",
            name: "Alim food Ltd",
            address: "111 kettering road, Northampton, Nn1 4az",
            contact: "K Pasha: 07983999363, K Aram: 07490 341423",
            contactName: "",
            whatsapp: "447983999363",
            postcode: "NN1 4az",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Nottingham",
            name: "",
            address: "17 Salisbury Square, Radford, Nottingham, NG7 2AB",
            contact: "07455367567",
            contactName: "Kak Hemin",
            whatsapp: "447455367567",
            postcode: "NG7 2AB",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Oxford",
            name: "Duhok News",
            address: "293 LFFLEY ROAD, OXFORD, OX4 4AQ",
            contact: "07454250055",
            contactName: "Miwan/ Amir",
            whatsapp: "447454250055",
            postcode: "OX4 4AQ",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Peterborough",
            name: "New International Super Store",
            address: "64/66 Dogsthorpe Road, Peterborough, PE1 3AQ",
            contact: "+44 7849 205799",
            contactName: "Mała Dlshad",
            whatsapp: "+447849205799",
            postcode: "PE1 3AQ",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Sheffield",
            name: "Shefield Bakery",
            address: "115 Spital Hill, Sheffield, S4 7LD",
            contact: "07466993160",
            contactName: "Kak Yadgar",
            whatsapp: "447466993160",
            postcode: "S4 7LD",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Slough",
            name: "Pro Cut",
            address: "10 Alpha St, North, SL1 1RB",
            contact: "07454678071",
            contactName: "Kak Ahmad",
            whatsapp: "447454678071",
            postcode: "SL1 1RB",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Southampton",
            name: "Local mini market",
            address: "15 romsey road, So164by",
            contact: "07863503164",
            contactName: "Kak Nabaz",
            whatsapp: "447863503164",
            postcode: "SO16 4by",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Southend on Sea",
            name: "",
            address: "84 SUTTON ROAD, SOUTHEND ON SEA, ESSEX, SS2 5EW",
            contact: "07518987129",
            contactName: "Mstafa/ Adam",
            whatsapp: "447518987129",
            postcode: "SS2 5EW",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Stoke-on-Trent",
            name: "Hanley best store",
            address: "73 trinity street, Stoke on Trent, St1 5na",
            contact: "+447735477682",
            contactName: "Shahryar",
            whatsapp: "+447735477682",
            postcode: "ST1 5na",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Swansea",
            name: "Living Concept",
            address: "The Kingsway, SA1 5LF",
            contact: "00447554066441",
            contactName: "Kak Bawan",
            whatsapp: "+447554066441",
            postcode: "SA1 5LF",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Swindon",
            name: "",
            address: "7 Market Street, swindon, SN1 1RZ",
            contact: "+447809669827",
            contactName: "kak Azad",
            whatsapp: "+447809669827",
            postcode: "SN1 1RZ",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Wakefield",
            name: "",
            address: "41 PARK LODGE LANE, WAKEFIELD, WF1 4NN",
            contact: "07588083335",
            contactName: "Kak Abdullah",
            whatsapp: "447588083335",
            postcode: "WF1 4NN",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Wigan",
            name: "Barakat Market",
            address: "36 wigan lane, Wigan, WN1 1XR",
            contact: "+44 7821 401192",
            contactName: "Kak Redar",
            whatsapp: "+447821401192",
            postcode: "WN1 1XR",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Wolverhampton",
            name: "WV6 Internet cafe",
            address: "46 newhampton road west, Wolverhampton, Wv6 0ry",
            contact: "+447786424245",
            contactName: "Kak Dlshad & kak Shwan",
            whatsapp: "+447786424245",
            postcode: "WV6 0ry",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Kent Warehouse",
            name: "Driver",
            address: "",
            contact: "+447853361334",
            contactName: "Hama Jaff",
            whatsapp: "+447853361334",
            postcode: "",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Kent Warehouse",
            name: "Driver",
            address: "",
            contact: "+447926606008",
            contactName: "Kak Sarkawt",
            whatsapp: "+447926606008",
            postcode: "",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Leeds Warehouse",
            name: "Driver",
            address: "",
            contact: "+447479071919",
            contactName: "Kak Sirwan",
            whatsapp: "+447479071919",
            postcode: "",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Leeds Warehouse",
            name: "Driver",
            address: "",
            contact: "+447749909900",
            contactName: "Shex Mohammed",
            whatsapp: "+447749909900",
            postcode: "",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Leeds Warehouse",
            name: "Driver",
            address: "",
            contact: "+447401039899",
            contactName: "Kak Dyar",
            whatsapp: "+447401039899",
            postcode: "",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Newcastle",
            name: "In&Out Store",
            address: "3 Two Ball Lonnen, Newcastle Upon Tyne, Tyne And Wear, England, NE4 9RN",
            contact: "+447762268615",
            contactName: "",
            whatsapp: "+447762268615",
            postcode: "NE4 9RN",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Nottingham",
            name: "Sea Travel Limited",
            address: "44-46 Bath Street, Nottingham, NG1 1DF",
            contact: "Hussein :07879222192, Ava : 07828945190",
            contactName: "",
            whatsapp: "447879222192",
            postcode: "NG1 1DF",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Glasgow",
            name: "ZAD FOOD",
            address: "73 Lister street, Glasgow, G4 0BZ",
            contact: "+44 141 588 5106, 07359231202, 07505 809161",
            contactName: "",
            whatsapp: "+447359231202",
            postcode: "G4 0BZ",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Bradford",
            name: "TRANSIT GO EXPRESS LTD",
            address: "18A LUMB LANE, BRADFORD, BD8 7QP",
            contact: "07727010908",
            contactName: "Ismail Hama",
            whatsapp: "447727010908",
            postcode: "BD8 7QP",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Middlesborough",
            name: "Sultan Food Centre",
            address: "17 GRESHAM ROAD, Middlesborough, TS1 4LY",
            contact: "+44 7944 245878",
            contactName: "Kak Abdullah",
            whatsapp: "+447944245878",
            postcode: "TS1 4LY",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Doncaster",
            name: "",
            address: "24 BECKETT ROAD, DONCASTER, DN2 4AD",
            contact: "07806677674",
            contactName: "Kak Kawa",
            whatsapp: "447806677674",
            postcode: "DN2 4AD",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },
        {
            city: "Hull",
            name: "Adam food store",
            address: "178 spring bank, Hull, HU3 1PG",
            contact: "07456090062",
            contactName: "",
            whatsapp: "447456090062",
            postcode: "HU3 1PG",
            category: "major",
            serviceType: "two-way",
            services: ["UK to Kurdistan", "Kurdistan to UK"]
        },

        // One-way service agents (UK to Kurdistan only)
        {
            city: "Gravesend",
            name: "Barber Kent 2",
            address: "3 Darnley Rd, Gravesend, Kent, DA11 0RU",
            contact: "07522521026",
            contactName: "Mam Hozan",
            whatsapp: "447522521026",
            postcode: "DA11 0RU",
            category: "one-way",
            serviceType: "one-way",
            services: ["UK to Kurdistan"]
        },
        {
            city: "St Leonards-on-sea",
            name: "",
            address: "19 Norman Road, St Leonards-on-sea, East Sussex, TN37 6NH",
            contact: "07411910429, 07804656592",
            contactName: "Kak Shaxawan",
            whatsapp: "447411910429",
            postcode: "TN37 6NH",
            category: "one-way",
            serviceType: "one-way",
            services: ["UK to Kurdistan"]
        },
        {
            city: "Maidstone",
            name: "Top Style Barbers",
            address: "33-35 Upper Stone St, Maidstone, Kent, ME15 6EU",
            contact: "07429443912",
            contactName: "Rebwar Qamishi",
            whatsapp: "447429443912",
            postcode: "ME15 6EU",
            category: "one-way",
            serviceType: "one-way",
            services: ["UK to Kurdistan"]
        },
        {
            city: "Manchester",
            name: "COLOURS TRAVEL CENTRE",
            address: "163A DICKENSON ROAD, LONGSIGHT, MANCHESTER, M13 0YN",
            contact: "07731514129, 01612244033",
            contactName: "Mr. Sabah",
            whatsapp: "447731514129",
            postcode: "M13 0YN",
            category: "one-way",
            serviceType: "one-way",
            services: ["UK to Kurdistan"]
        },
        {
            city: "Worthing",
            name: "",
            address: "4-6 South Street, Worthing, bn14 7lh",
            contact: "07784334611",
            contactName: "Kak Shirwan",
            whatsapp: "447784334611",
            postcode: "bn14 7lh",
            category: "one-way",
            serviceType: "one-way",
            services: ["UK to Kurdistan"]
        }
    ];

    const agentsContainer = document.getElementById('agents-container');
    const searchInput = document.getElementById('search');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const toast = document.getElementById('toast');
    
    // Display all agents initially
    displayAgents(agentsData);
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredAgents = agentsData.filter(agent => 
            agent.city.toLowerCase().includes(searchTerm) ||
            (agent.name && agent.name.toLowerCase().includes(searchTerm)) ||
            (agent.contactName && agent.contactName.toLowerCase().includes(searchTerm)) ||
            (agent.postcode && agent.postcode.toLowerCase().includes(searchTerm))
        );
        displayAgents(filteredAgents);
    });
    
    // Tab filtering
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            let filteredAgents = [];
            
            if (filter === 'all') {
                filteredAgents = agentsData;
            } else if (filter === 'two-way') {
                filteredAgents = agentsData.filter(agent => agent.serviceType === 'two-way');
            } else if (filter === 'one-way') {
                filteredAgents = agentsData.filter(agent => agent.serviceType === 'one-way');
            } else {
                filteredAgents = agentsData.filter(agent => agent.category === filter);
            }
            
            displayAgents(filteredAgents);
        });
    });
    
    function formatPhoneNumber(phone) {
        // Remove all non-digit characters except +
        return phone.replace(/[^\d+]/g, '');
    }
    
    function createWhatsAppLink(phone) {
        // Extract the first phone number if multiple are listed
        const firstPhone = phone.split(',')[0].split('(')[0].trim();
        const cleanPhone = formatPhoneNumber(firstPhone);
        return `https://wa.me/${cleanPhone}`;
    }
    
    function createMapLink(address) {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    }
    
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }
    
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                showToast('Copied to clipboard!');
            } catch (err) {
                showToast('Failed to copy');
            }
            document.body.removeChild(textarea);
        });
    }
    
    function downloadCardAsImage(card) {
        html2canvas(card).then(canvas => {
            const link = document.createElement('a');
            link.download = `${card.querySelector('h3').textContent}-agent.jpg`;
            link.href = canvas.toDataURL('image/jpeg', 0.9);
            link.click();
        });
    }
    
    function getAgentText(agent) {
        let text = `${agent.city}`;
        if (agent.name) text += ` - ${agent.name}`;
        text += `\n\n`;
        
        if (agent.contactName) text += `Contact: ${agent.contactName}\n`;
        if (agent.address) text += `Address: ${agent.address}`;
        if (agent.postcode) text += `, ${agent.postcode}`;
        text += `\n\n`;
        
        if (agent.contact) text += `Phone: ${agent.contact}\n`;
        if (agent.whatsapp) text += `WhatsApp: https://wa.me/${formatPhoneNumber(agent.whatsapp)}\n`;
        if (agent.address) text += `Map: ${createMapLink(`${agent.address} ${agent.postcode || ''}`)}\n\n`;
        
        text += `Service: ${agent.serviceType === 'two-way' ? 'UK ⇄ Kurdistan' : 'UK → Kurdistan'}`;
        return text;
    }
    
    function displayAgents(agents) {
        agentsContainer.innerHTML = '';
        
        if (agents.length === 0) {
            agentsContainer.innerHTML = '<div class="no-results">No agents found matching your search.</div>';
            return;
        }
        
        agents.forEach(agent => {
            const isOneWay = agent.serviceType === 'one-way';
            const agentCard = document.createElement('div');
            agentCard.className = `agent-card ${isOneWay ? 'one-way' : ''}`;
            
            const mapLink = agent.address ? createMapLink(`${agent.address} ${agent.postcode || ''}`) : '';
            const whatsappLink = agent.contact ? createWhatsAppLink(agent.contact) : '';
            const agentText = getAgentText(agent);
            
            agentCard.innerHTML = `
                <div class="card-header">
                    <h3>${agent.city}</h3>
                    ${agent.name ? `<p>${agent.name}</p>` : ''}
                </div>
                <div class="card-body">
                    <div class="agent-info">
                        ${agent.address ? `
                            <p><strong>Address:</strong> 
                                <a href="${mapLink}" target="_blank" class="contact-link">
                                    ${agent.address}
                                </a>
                            </p>
                            ${mapLink ? `<a href="${mapLink}" target="_blank" class="map-link"><i class="fas fa-map-marker-alt"></i> View on Map</a>` : ''}
                        ` : ''}
                        ${agent.postcode ? `<p><strong>Postcode:</strong> ${agent.postcode}</p>` : ''}
                    </div>
                    <div class="agent-contact">
                        ${agent.contactName ? `<p><strong>Contact:</strong> ${agent.contactName}</p>` : ''}
                        ${agent.contact ? `
                            <p><strong>Phone:</strong> 
                                <a href="tel:${formatPhoneNumber(agent.contact)}" class="contact-link">
                                    ${agent.contact}
                                </a>
                                ${whatsappLink ? `<a href="${whatsappLink}" target="_blank" class="whatsapp-link"><i class="fab fa-whatsapp"></i></a>` : ''}
                            </p>
                        ` : ''}
                        ${agent.opening ? `<p><strong>Opening:</strong> ${agent.opening}</p>` : ''}
                        <div class="service-badge ${isOneWay ? 'one-way-badge' : 'two-way-badge'}">
                            ${isOneWay ? 'One-way service: UK → Kurdistan' : 'Two-way service: UK ⇄ Kurdistan'}
                        </div>
                    </div>
                    <div class="card-actions">
                        <button class="action-btn copy">
                            <i class="far fa-copy"></i> Copy
                        </button>
                        <button class="action-btn download">
                            <i class="fas fa-download"></i> Save
                        </button>
                    </div>
                </div>
            `;
            
            // Add animation
            agentCard.style.opacity = '0';
            agentCard.style.transform = 'translateY(20px)';
            agentCard.style.animation = `fadeInUp ${Math.random() * 0.3 + 0.2}s ease-out forwards`;
            
            agentsContainer.appendChild(agentCard);
            
            // Add event listeners to buttons
            const copyBtn = agentCard.querySelector('.copy');
            const downloadBtn = agentCard.querySelector('.download');
            
            copyBtn.addEventListener('click', () => {
                copyToClipboard(agentText);
            });
            
            downloadBtn.addEventListener('click', () => {
                downloadCardAsImage(agentCard);
            });
            
            // Animate card appearance
            setTimeout(() => {
                agentCard.style.opacity = '1';
                agentCard.style.transform = 'translateY(0)';
            }, 100);
        });
    }
});