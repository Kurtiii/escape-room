@props([
    'name'
])

@if($errors->has($name))
    <div {{ $attributes->class(['text-error text-xs']) }}>{{ $errors->first($name) }}</div>
@endif
