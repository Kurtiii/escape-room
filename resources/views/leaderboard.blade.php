<x-layout>
    <div class="flex justify-center align-center mt-20">
        <div class="card card-border bg-base-100 shadow-2xl w-110">
            <div class="card-body">
                <h2 class="card-title">
                    ✨ Bestenliste
                </h2>

                <div class="overflow-x-auto">
                    <table class="table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Klasse</th>
                            <th>Zeit</th>
                        </tr>
                        </thead>
                        <tbody>
                        @php $i = 1; @endphp
                        @forelse($users as $player)
                            <tr {{((auth()->user()) AND ($player->id === auth()->user()->id)) ? 'id=show_me class=bg-base-200' : ''}}>
                                <th>{{$i++}}</th>
                                <td>{{$player->name}}</td>
                                <td><span class="badge badge-soft badge-accent">{{$player->class}}.</span></td>
                                <td>{{\Carbon\CarbonInterval::seconds($player->seconds_needed)->cascade()->forHumans()}}</td>

                        @empty
                            <tr>
                                <td colspan="4" class="text-center">Keine Einträge gefunden</td>
                            </tr>
                        @endforelse
                    </table>
                </div>

                <a href="{{route('login')}}" class="btn btn-primary mt-5">
                    <i class="fa-solid fa-arrow-left mr-1"></i>
                    Zurück zum Start
                </a>
            </div>
        </div>
    </div>

</x-layout>
