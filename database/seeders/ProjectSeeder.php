<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    private $projectArray = [];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i <= 50; $i++){
            $projectArray[] = [
            'name' => Str::random(10),
            'description' => Str::random(10),
            'is_completed' => false,
            ];
        }
        foreach($projectArray as $project){
            Project::create($project);
        }
    }
}
