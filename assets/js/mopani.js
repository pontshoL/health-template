const clinicData = {
    'Giyani Sub-District': [
        { 'Name': 'BASANI CLINIC', 'Tel Number': '0158115913', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'SHIKHUMBA', 'Tel Number': '0158001210', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'NKURI CLINIC', 'Tel Number': '0158115911', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'MSENGI CLINIC', 'Tel Number': '0158115915', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'NDENGEZA', 'Tel Number': '0158115902', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'RATANANG', 'Tel Number': '0153106004', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'KHEYI CLINIC', 'Tel Number': '0158115917', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'NKOMO CLINIC', 'Tel Number': '0829907159', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'MAPAYENI', 'Tel Number': '0158115924', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'SIKHIMINI', 'Tel Number': '0153106002', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'MAKHUVA', 'Tel Number': '0158115919', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'BOCHABELO', 'Tel Number': '0153106011', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'HLANEKI CLINIC', 'Tel Number': '0158115951', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'NTLURI CLINIC', 'Tel Number': '0158115960', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'ZAVA CLINIC', 'Tel Number': '0829907137', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'MUYEXE CLINIC', 'Tel Number': 'N/A', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'MATSOTSOSELA', 'Tel Number': '0158517948', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'NKHESANI GATEWAY', 'Tel Number': '0158115940', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'THOMO CLINIC', 'Tel Number': '0158115948', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'KREMETART', 'Tel Number': '0735540413', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'DZUMERI CHC', 'Tel Number': '0158115914', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'KHAKHALA-HLOMLA', 'Tel Number': '0158115904', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'GIYANI CHC', 'Tel Number': '0832631810', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'MHLAVA- WILLEM', 'Tel Number': '0158115906', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'NGOVE CLINIC', 'Tel Number': '0158115909', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'SHIVULANI', 'Tel Number': '0158517905', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'XITLAKATI CLINIC', 'Tel Number': '0158115923', 'Operational Manager': '', 'Contact': '' },
        { 'Name': 'LOLOKA CLINIC', 'Tel Number': '0158115920', 'Operational Manager': '', 'Contact': '' }
    ],

    // Other sub-districts can be added similarly
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
