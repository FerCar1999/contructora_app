@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Unidades') }}</div>

                <div class="card-body">
                    {{ $units }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
