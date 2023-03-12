function Showcase(){

return(
<div class="perspective">

  <label class="tab tab-2" for="tab-top">TOP</label>
  <label class="tab tab-1" for="tab-front">FRONT</label>
  <label class="tab tab-3" for="tab-bottom">BOTTOM</label>
  <input type="radio" name="tabs" id="tab-top"/>
  <input type="radio" name="tabs" id="tab-front"/>
  <input type="radio" name="tabs" id="tab-bottom"/> 

  <div class="cube">
    <div class="tab-content tab-content-2">
      <h1>TOP CONTENT</h1>
      <p>THIS IS AWESOME</p>
    </div>
     <div class="tab-content tab-content-1">
      <h1>FRONT CONTENT</h1>
      <p>THIS IS COOL</p>
    </div>
    <div class="tab-content tab-content-3">
      <h1>BOTTOM CONTENT</h1>
      <p>THIS IS SWEET</p>
    </div>
  </div>
</div>
)}

export default Showcase