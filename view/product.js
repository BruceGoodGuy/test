<div class="d-inline p-2 bg-primary text-white">List Product</div>
<table class="table table-striped mt-2">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{{name}}</th>
      <th scope="col">{{price}}</th>
    </tr>
  </thead>
  <tbody>
    <tr ng-repeat="product in products track by $index">
      <th scope="row">{{$index+1}}</th>
      <td>{{product.name}}</td>
      <td>{{product.price | currency: "":0}} VND</td>
    </tr>
  </tbody>
</table>