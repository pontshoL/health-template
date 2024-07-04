// Clinic data organized by clinic names
const clinicData = {
    'Polokwane Clinic': [
        { 'Name': 'Moletjie Clinic', 'Tel Number': '015 229 2903', 'Operational Manager': 'Motjopi MJ', 'Contact': '083 947 6403' },
        { 'Name': 'Semenya clinic', 'Tel Number': '015 229 1791', 'Operational Manager': 'Serumula L', 'Contact': '' },
        { 'Name': 'Perskebuilt clinic', 'Tel Number': '015 277 8932', 'Operational Manager': 'Maleka A (acting)', 'Contact': '072 418 0306' },
        { 'Name': 'Mushubaba (Matamanyane) clinic', 'Tel Number': '015 229 0836', 'Operational Manager': 'Lepuru TT (acting)', 'Contact': '082 398 3977' },
        { 'Name': 'Seshego gateway', 'Tel Number': '015 223 9959/8', 'Operational Manager': 'Machaka ME (acting)', 'Contact': '083 329 8420' },
        { 'Name': 'Seshego 2 clinic', 'Tel Number': '015 223 9900', 'Operational Manager': 'Magagane MNT (acting)', 'Contact': '073 239 8155' },
        { 'Name': 'Seshego 3 clinic', 'Tel Number': '015 223 6895', 'Operational Manager': 'Tladi RA (acting)', 'Contact': '079 958 1434' },
        { 'Name': 'Seshego 4 clinic', 'Tel Number': '015 223 6902', 'Operational Manager': 'Maloka TM (acting)', 'Contact': '072 401 8995' },
        { 'Name': 'Buite clinic', 'Tel Number': '015 297 4503', 'Operational Manager': 'Retief P (acting)', 'Contact': '083 566 7913' },
        { 'Name': 'A. Mamabolo clinic', 'Tel Number': '015 267 4835', 'Operational Manager': 'Malahlela MA (acting)', 'Contact': '076 199 7778' },
        { 'Name': 'Block 14 clinic', 'Tel Number': '015 266 0904', 'Operational Manager': 'Thubane ML (acting)', 'Contact': '082 488 5098' },
        { 'Name': 'Mamotshwa clinic', 'Tel Number': '015 266 0900/01', 'Operational Manager': 'Thangwane MV (acting)', 'Contact': '072 194 5310' },
        { 'Name': 'Molepo clinic', 'Tel Number': '015 268 0111', 'Operational Manager': 'Mogashoa MS (acting)', 'Contact': '076 307 8371' },
        { 'Name': 'Sehlale clinic', 'Tel Number': '015 618 2903', 'Operational Manager': 'Sefara NW (acting)', 'Contact': '072 344 9977' },
        { 'Name': 'Mapodu clinic (Spitzkop)', 'Tel Number': '015 267 3040', 'Operational Manager': 'Mafunzwaini R', 'Contact': '082 963 1690' },
        { 'Name': 'Evelyn. Lekganyane', 'Tel Number': '015 266 0095', 'Operational Manager': 'Mapara MC (acting)', 'Contact': '072 077 1803' },
        { 'Name': 'Mankweng clinic', 'Tel Number': '015 267 7827', 'Operational Manager': 'Poopedi MJ (acting)', 'Contact': '082 960 4673' },
        { 'Name': 'Mankweng gateway clinic', 'Tel Number': '015 267 2914', 'Operational Manager': 'Sehlapelo MC (acting)', 'Contact': '072 407 9934' },
        { 'Name': 'Makanye clinic', 'Tel Number': '015 267 4254', 'Operational Manager': 'Mathebula LB (acting)', 'Contact': '072 596 3329' },
        { 'Name': 'Laastehoop clinic', 'Tel Number': '015 618 2908', 'Operational Manager': 'Ntwampe MS (acting)', 'Contact': '071 489 9877' },
        { 'Name': 'Mamushi clinic', 'Tel Number': '015 618 0263', 'Operational Manager': 'Raphela RM', 'Contact': '078 274 3143' },
        { 'Name': 'Phuti clinic', 'Tel Number': '015 618 2900', 'Operational Manager': 'Lelope MN (acting)', 'Contact': '076 757 4996' },
        { 'Name': 'Mothiba clinic', 'Tel Number': '015 267 4255', 'Operational Manager': 'Manabile MS', 'Contact': '073 663 2222' },
        { 'Name': 'Soetfontein clinic', 'Tel Number': '071 605 9958', 'Operational Manager': 'Chuene TG', 'Contact': '079 427 3998' },
        { 'Name': 'Nobody clinic', 'Tel Number': '015 677 4768', 'Operational Manager': 'Mphahlele WM (acting)', 'Contact': '076 453 1351' },
        { 'Name': 'Dikgale clinic', 'Tel Number': '015 267 4833', 'Operational Manager': 'Moloisi MM', 'Contact': '076 232 0717' },
        { 'Name': 'Seobi-Dkgale clinic', 'Tel Number': '015 397 7917', 'Operational Manager': 'Kheswa MS', 'Contact': '072 614 6486' },
        { 'Name': 'Sebayeng clinic', 'Tel Number': '015 267 9458', 'Operational Manager': 'Matseba ME', 'Contact': '083 703 4978' },
        { 'Name': 'Makotopong clinic', 'Tel Number': '015 267 2906', 'Operational Manager': 'Ramphele MLA', 'Contact': '079 491 7881' },
        { 'Name': 'J.Mamabolo clinic', 'Tel Number': '015 267 2909', 'Operational Manager': 'Mamabolo ME (acting)', 'Contact': '072 425 9470' },
        { 'Name': 'Maja clinic', 'Tel Number': '015 651 1900', 'Operational Manager': 'Maja E (acting)', 'Contact': '076 018 4677' },
        { 'Name': 'Chuene clinic', 'Tel Number': '015 651 0000', 'Operational Manager': 'Maja MA', 'Contact': '072 900 9851' },
        { 'Name': 'Manamela clinic', 'Tel Number': '015 229 2900/01', 'Operational Manager': 'Matsimela RC', 'Contact': '082 975 6104' },
        { 'Name': 'Rethabile Health Centre', 'Tel Number': '015 297 7025', 'Operational Manager': 'Swafo MG / Noko VK (acting)', 'Contact': '081 811 8257 / 072 564 4053 / 082 775 6637' },
        { 'Name': 'Maraba Clinic', 'Tel Number': '015 224 9919', 'Operational Manager': 'Mokwatlo RR (acting)', 'Contact': '083 244 8548' },
        { 'Name': 'Mashashane clinic', 'Tel Number': '015 224 4083', 'Operational Manager': 'Matlou RM (acting)', 'Contact': '073 651 7735' },
        { 'Name': 'Lonsdale clinic', 'Tel Number': '015 221 0007', 'Operational Manager': 'Lekgau NR (acting)', 'Contact': '082 223 7519' },
        { 'Name': 'Matlala clinic', 'Tel Number': '015 227 0002', 'Operational Manager': 'Mashiachidi RJ (acting)', 'Contact': '072 620 5097' },
        { 'Name': 'Diana clinic', 'Tel Number': '015 224 9902', 'Operational Manager': 'Mokwatlo TM (acting)', 'Contact': '076 336 6128' },
        { 'Name': 'Sello Moloto clinic', 'Tel Number': '015 221 1400/1', 'Operational Manager': 'Mpebe MR (acting)', 'Contact': '072 325 1610' },
        { 'Name': 'Goedgevonden clinic', 'Tel Number': '015 426 9902', 'Operational Manager': 'Meso KO (acting)', 'Contact': '079 971 0987' },
        { 'Name': 'FW Knobel Gateway', 'Tel Number': '015 221 1637', 'Operational Manager': 'Seema MF', 'Contact': '071 685 1102' }
    ],
    'Bloberg Clinic': [
        { 'Name': 'Alldays clinic', 'Tel Number': '015 557 1527', 'Operational Manager': 'Manyaga N', 'Contact': '076 572 0062' },
        { 'Name': 'Buffelshoek clinic', 'Tel Number': '015 505 9009/10', 'Operational Manager': 'Kgwathle KA', 'Contact': '072 873 0640' },
        { 'Name': 'Burgerrecht clinic', 'Tel Number': '015 592 9904/5', 'Operational Manager': 'Molema K', 'Contact': '083 334 5283' },
        { 'Name': 'Devrede clinic', 'Tel Number': '015 505 9028', 'Operational Manager': 'Mphashe KC (acting)', 'Contact': '082 570 0604' },
        { 'Name': 'Indermark clinic', 'Tel Number': '015 593 7900', 'Operational Manager': 'Ranamala MJ (acting)', 'Contact': '071 606 1087' },
        { 'Name': 'Kibi clinic', 'Tel Number': '015 592 0002', 'Operational Manager': 'Mathekgane RR (acting)', 'Contact': '084 442 3061' },
        { 'Name': 'Krantzplaast clinic', 'Tel Number': '015 228 0904/5', 'Operational Manager': 'Tjale NP', 'Contact': '078 489 8570' },
        { 'Name': 'Rosenkrantz clinic', 'Tel Number': '015 228 0109', 'Operational Manager': 'Phofele PP (acting)', 'Contact': '082 430 5006' },
        { 'Name': 'Ambergate', 'Tel Number': '015 228 0903', 'Operational Manager': 'Matlala RS (acting)', 'Contact': '082 517 7585' },
        { 'Name': 'Lesfontein clinic', 'Tel Number': '015 592 9921', 'Operational Manager': 'Mothapa MA (acting)', 'Contact': '082 394 1621' },
        { 'Name': 'My darling clinic', 'Tel Number': '015 592 9908/9', 'Operational Manager': 'Sebigi MM', 'Contact': '082 576 7589' },
        { 'Name': 'Montz clinic', 'Tel Number': '015 505 9008/7', 'Operational Manager': 'Mathopa MM (acting)', 'Contact': '076 111 4644' },
        { 'Name': 'Seakamela clinic', 'Tel Number': '015 505 9034/35', 'Operational Manager': 'Malungani MA', 'Contact': '073 256 6677' },
        { 'Name': 'Schoongesight clinic', 'Tel Number': '015 505 9003/4', 'Operational Manager': 'Mafa JP (acting)', 'Contact': '072 955 9446' },
        { 'Name': 'Goedtrou clinic', 'Tel Number': '015 505 9005', 'Operational Manager': 'Ngwepe PF', 'Contact': '078 281 5462' },
        { 'Name': 'UitKyk clinic', 'Tel Number': '015 505 9036', 'Operational Manager': 'Sefoko LS (acting)', 'Contact': '082 802 0881' },
        { 'Name': 'Kromhoek clinic', 'Tel Number': '015 505 9013', 'Operational Manager': 'Mantsi RJ', 'Contact': '079 073 1908' },
        { 'Name': 'Taaiboschgroet clinic', 'Tel Number': '015 592 9906/7', 'Operational Manager': 'Mmoko MM (acting)', 'Contact': '079 258 9923' },
        { 'Name': 'Towerfontein clinic', 'Tel Number': '015 529 9910/11', 'Operational Manager': 'Manenzhe MA (acting)', 'Contact': '076 935 5720' }
    ],
    'Lepelle Clinic': [
        { 'Name': 'Moletlane clinic', 'Tel Number': '015 642 4190', 'Operational Manager': 'Hlatswayo DM (acting)', 'Contact': '082 821 4026' },
        { 'Name': 'Mogoto clinic', 'Tel Number': '015 642 1901', 'Operational Manager': 'Mahlape MM', 'Contact': '082 551 8829' },
        { 'Name': 'Rakgoatha clinic', 'Tel Number': '015 642 1918', 'Operational Manager': 'Ngake GM (acting)', 'Contact': '083 560 9715' },
        { 'Name': 'Slypsteen clinic', 'Tel Number': '015 662 0050', 'Operational Manager': 'Maja MG (acting)', 'Contact': '082 593 4337' },
        { 'Name': 'Byldrift clinic', 'Tel Number': '015 662 0135', 'Operational Manager': 'Mmotla MJ', 'Contact': '082 264 3444' },
        { 'Name': 'Smugglers Union clinic', 'Tel Number': '015 662 1924', 'Operational Manager': 'Mashishi MJ (acting)', 'Contact': '082 297 9502' },
        { 'Name': 'Zebediela gateway', 'Tel Number': '015 662 1917', 'Operational Manager': 'Mmako NG (acting)', 'Contact': '072 244 1974' },
        { 'Name': 'Boschsplaats clinic', 'Tel Number': '015 633 1907', 'Operational Manager': 'Mpuru ML (acting)', 'Contact': '082 936 7054' },
        { 'Name': 'Lebowakgomo clinic', 'Tel Number': '015 632 5166', 'Operational Manager': 'Seshoka PT (acting)', 'Contact': '076 177 9743' },
        { 'Name': 'Lebowakgomo gateway clinic', 'Tel Number': '015 632 8908', 'Operational Manager': 'Manamela BM (acting)', 'Contact': '072 542 5788' },
        { 'Name': 'Ledwaba clinic', 'Tel Number': '015 633 4293', 'Operational Manager': 'Ledwaba RT (acting)', 'Contact': '082 048 1972' },
        { 'Name': 'Unit B', 'Tel Number': '015 633 1924', 'Operational Manager': 'Letoaba RR (acting)', 'Contact': '082 751 703' },
        { 'Name': 'Unit R clinic', 'Tel Number': '015 632 4194', 'Operational Manager': 'Semenya MF (acting)', 'Contact': '072 547 2024' },
        { 'Name': 'Zebediela Estate clinic', 'Tel Number': '015 642 3185', 'Operational Manager': 'Monama SP', 'Contact': '082 431 0973' },
        { 'Name': 'Dithabaneng clinic', 'Tel Number': '015 634 1910', 'Operational Manager': 'Lekgau RD (acting)', 'Contact': '073 210 1355' },
        { 'Name': 'Malemati clinic', 'Tel Number': '071 634 1919', 'Operational Manager': 'Mazwi BJ', 'Contact': '071 483 3146' },
        { 'Name': 'Mphahlele clinic', 'Tel Number': '015 634 0031', 'Operational Manager': 'Mangaba ME (acting)', 'Contact': '079 423 5880' },
        { 'Name': 'Mashite clinic', 'Tel Number': '015 634 0235 / 015 634 8267', 'Operational Manager': 'Kgwele RM (acting)', 'Contact': '082 214 2020' }
    ],
    'Molemole Clinic': [
        { 'Name': 'Botlokwa Gateway', 'Tel Number': '015 527 8000', 'Operational Manager': 'Maphobela MF (acting)', 'Contact': '083 500 6003' },
        { 'Name': 'Dendron Clinic', 'Tel Number': '015 501 2900', 'Operational Manager': 'Masenya MC (acting)', 'Contact': '072 937 2199' },
        { 'Name': 'Mohodi Clinic', 'Tel Number': '015 505 9012', 'Operational Manager': 'Seanego KB', 'Contact': '076 685 5482' },
        { 'Name': 'Makgato Clinic', 'Tel Number': '015 527 7900', 'Operational Manager': 'Mabelapoo MJ', 'Contact': '076 116 1878' },
        { 'Name': 'Matoks Clinic', 'Tel Number': '015 527 7949/50', 'Operational Manager': 'Mothemela MP (acting)', 'Contact': '083 444 6857' },
        { 'Name': 'Ramokgopa Clinic', 'Tel Number': '015 526 2022', 'Operational Manager': 'Ramakgoakgoa MM', 'Contact': '082 051 3675' },
        { 'Name': 'Eisleben Clinic', 'Tel Number': '015 526 7903/4 / 083 446 5136', 'Operational Manager': 'Mashaba DR', 'Contact': '079 065 9893' },
        { 'Name': 'Nthabiseng clinic', 'Tel Number': '015 397 7936', 'Operational Manager': 'Maila SH', 'Contact': '082 706 0194' },
        { 'Name': 'Percy clinic', 'Tel Number': '015 229 2927/00', 'Operational Manager': 'Moloto AT (acting)', 'Contact': '084 263 3730' }
    ],
    
    // Add more clinic data as needed
};

// Function to display clinic information
function showClinicInfo(clinic) {
    const clinicInfoDiv = document.getElementById('clinic-info');
    const clinicDataArray = clinicData[clinic];

    if (clinicDataArray && clinicDataArray.length > 0) {
        let htmlContent = '<table>';
        htmlContent += '<tr><th>Name</th><th>Tel Number</th><th>Operational Manager</th><th>Contact</th></tr>';

        clinicDataArray.forEach(clinic => {
            htmlContent += `<tr><td>${clinic.Name}</td><td>${clinic['Tel Number']}</td><td>${clinic['Operational Manager']}</td><td>${clinic.Contact}</td></tr>`;
        });

        htmlContent += '</table>';
        clinicInfoDiv.innerHTML = htmlContent;
    } else {
        clinicInfoDiv.innerHTML = '<p>No information available for this clinic.</p>';
    }
}
