import React from "react";

export default function Search() {
  return (
    <form id="search-form" class="mb-3">
      <div class="row">
        <div class="col-9">
          <input
            type="search"
            placeholder="Enter a city"
            class="form-control"
            id="search-city-input"
          />
        </div>
        <div class="col-3">
          <input type="submit" value="Search" class="btn btn-primary w-100" />
        </div>
      </div>
    </form>
  );
}
