const template = {
    userConfig: {
        tooltip: {
            pointFormat: "<b>{point.y} thousand megawatthours</b>"
        },
        plotOptions: {
            pie: {
                showInLegend: true,
                innerSize: "80%",
                dataLabels: {
                    enabled: false,
                    distance: -14,
                    color: "red",
                    style: {
                        fontweight: "bold",
                        fontsize: 80
                    }
                }
            }
        }
    },
    yearFrom: "2001",
    yearTo: "2015",
    msg: "Select the range"
};

export default template;