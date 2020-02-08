      fetch('https://secure2.hamiltoncounty.in.gov/PropertyReports/api/Search?selector=thornberry%20dr')
      .then((res) => res.json())
      .then((data) => {
        let output = '<h2 class="mb-4">Lots</h2>';

        console.log(data)