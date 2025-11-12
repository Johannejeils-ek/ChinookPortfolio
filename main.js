// Bar Chart
fetch('Customerquery3.json')
    .then(response => response.json())
    .then(customers3 => {

        const labels = customers3.map(customer => customer.Country);
        const values = customers3.map(customer => customer.TotalCustomers);

        // Tegn grafen
        const ctx = document.getElementById('barChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Total',
                    data: values,
                    backgroundColor: "rgba(255, 0, 0, 0.77)",
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'All coutries in the Dataset',
                        font: {size: 16},
                    }
                }
            }
        });

    });

// Pie Chart
fetch('Customerquery1.json')
    .then(response => response.json())
    .then(customers1 => {

        // Lav labels og værdier til Chart.js
        const labels = customers1.map(customer => customer.CustomerSegment);
        const values = customers1.map(customer => customer.TotalRevenue);

        /*Trin for trin med map():
        Første iteration (customer = {CustomerSegment: "Other", TotalRevenue: 1805.54})
        customer.CustomerSegment → "Other"
        customer.TotalRevenue → 1805.54
        Anden iteration (customer = {CustomerSegment: "USA", TotalRevenue: 523.06})
        customer.CustomerSegment → "USA"
        customer.TotalRevenue → 523.06
         */

        // Tegn grafen
        const ctx = document.getElementById('pieChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Total Revenue',
                    data: values,
                    backgroundColor: ["rgba(8, 31, 92, 0.7)", "rgba(255, 0, 0, 0.77)"],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'USA vs Other countries on Revenue',
                        font: {size: 16},
                    }
                }
            }
        });
    });


// Line and Bar Chart
fetch('Customerquery2.json')
    .then(response => response.json())
    .then(customers2 => {

        const labels = customers2.map(customer => customer.Country);
        const valuesOne = customers2.map(customer => customer.AvgInvoice);
        const valuesTwo = customers2.map(customer => customer.TotalRevenue);

        // Tegn grafen
        const ctx = document.getElementById('linebarChart').getContext('2d');
        new Chart(ctx, {
            data: {
                labels: labels,
                datasets: [{
                    type: 'line',
                    label: 'Total Revenue',
                    data: valuesTwo,
                    backgroundColor: "red",
                    borderColor: "red",
                    borderWidth: 3,
                    yAxisID: 'y1', // right axis
                    pointRadius: 4,
                },
                    {
                        type: 'bar',
                        label: 'Avreage Inovice',
                        data: valuesOne,
                        backgroundColor: "rgba(8, 31, 92, 0.7)",
                        borderWidth: 1,
                        yAxisID: 'y' // left axis
                    }
                ]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'All coutries in the Dataset',
                        font: {size: 16},
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Avg Invoice'
                        },
                    },
                    y1: {
                        type: 'linear',
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Total Revenue($)'
                        },
                        grid: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    }
                }
            }
        });

    });




