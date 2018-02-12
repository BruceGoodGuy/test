<div class="d-inline p-2 bg-primary text-white">List USER 
</div>
<div class="form-group mt-3">
    <input type="text" class="form-control" placeholder="Search user" ng-model = "guy"></input>
  </div>
<table class="table table-striped mt-2">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{{first}}</th>
      <th scope="col">{{last}}</th>
      <th scope="col">{{email}}</th>
    </tr>
  </thead>
  <tbody>
    <tr ng-repeat="user in users | filter: guy track by $index" ng-dblclick ="update(user.id)" style="cursor: pointer">
      <th scope="row">{{$index+1}}</th>
      <td>{{user.first_name}}</td>
      <td>{{user.last_name}}</td>
      <td>{{user.email}}</td>
    </tr>
  </tbody>
</table>