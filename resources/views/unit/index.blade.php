@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header bg-dark text-white">{{ __('Unidades') }}

                        <div class="d-flex justify-content-end pb-3">
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-success" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                Launch demo modal
                            </button>
                        </div>
                    </div>

                    <div class="card-body">
                        <unit-component></unit-component>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
