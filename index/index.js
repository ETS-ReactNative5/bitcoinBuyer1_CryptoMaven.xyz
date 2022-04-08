import {FinClass} from "./FinClass.js" 
import {DOM} from "./dataUtil/DOM.js"


console.log("hey")

const fin = new FinClass()
const COIN_DATA = fin.getCoins()
// screen_data.crypto_data[i]
const DUMMY_DATA = [
    { id: 'd1', value: 10, region: 'USA' },
    { id: 'd2', value: 11, region: 'India' },
    { id: 'd3', value: 12, region: 'China' },
    { id: 'd4', value: 6, region: 'Germany' },
  ];
  console.log(DUMMY_DATA)
  const xScale = d3
    .scaleBand()
    .domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
    .rangeRound([0, 250])
    .padding(0.1);
  const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);
  
  const container = d3.select('svg').classed('container', true);
  
  const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 200 - yScale(data.value))
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));
  
  setTimeout(() => {
    bars.data(DUMMY_DATA.slice(0, 2)).exit().remove();
  }, 2000);



  const newDiv = document.createElement("div")
  newDiv.attr
  const ul = document.createElement("ul")
  body.append(ul)

  // GET LIST FROM API /api/nations
          // Data to return crypto resources     
          // META DATA BY NATION
          // app.get("/api/countries", (req, res) => {
          //   const finMeta = finClass.getMetaData("countries");
          //   console.log("RUNNING /api/countries finMeta: ", finMeta);

          //   res.json(finMeta);
          // });
          getMetaData
  const countryData = {

    items: ['China', 'India', 'USA'],
    addItem(item) {
      this.items.push(item);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    updateItem(index, newItem) {
      this.items[index] = newItem;
    },
  };
  
  d3.select('ul')
    .selectAll('li')
    .data(countryData.items, data => data)
    .enter()
    .append('li')
    .text((data) => data);
  
  setTimeout(() => {
    countryData.addItem('France');
    d3.select('ul')
      .selectAll('li')
      .data(countryData.items, data => data)
      .enter()
      .append('li')
      .classed('added', true)
      .text((data) => data);
  }, 2000);
  
  setTimeout(() => {
    countryData.removeItem(0);
    d3.select('ul')
      .selectAll('li')
      .data(countryData.items, data => data)
      .exit()
      .classed('redundant', true);
  }, 4000);
  
  setTimeout(() => {
    countryData.updateItem(1, 'Russia')
    d3.select('ul')
      .selectAll('li')
      .data(countryData.items, data => data)
      .exit()
      .classed('updated', true)
      .text('Russia');
  }, 6000);

//   <footer class="footer">
//   <h5>Copyright &copy; 2022 All Rights Reserved.</h5>
//   <h5>  <a
//       href="mailto:thomasm1.maestas@gmail.com"
//       title="Contact Information: thomasmaestas.net/"
//     >
//       Contact Thomas Maestas</a
//     >
//     &nbsp; &nbsp; | &nbsp;&nbsp;
//     <a href="https://thomasmaestas.net">thomasmaestas.net</a>
//   </h5>
// </footer>