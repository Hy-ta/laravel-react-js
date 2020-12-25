<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

// http request ... Request $request
// based on params id ... give id param as $id
// above is the case when interacting with route

class ProjectController extends Controller
  {

      public function index()
      {
        $projects = Project::where('is_completed', false)
                            ->orderBy('created_at', 'desc')
                            ->withCount(['tasks' => function ($query) {
                              $query->where('is_completed', false);
                            }])
                            ->get();

        return $projects->toJson();
      }

      public function store(Request $request)
      {  
        $validatedData = $request->validate(['name' => 'required']);

        $project = Project::create([
          'name' => $validatedData['name'],
          'description' => $request->description,
        ]);

        return $project->toJson();
             
      }

      public function show($id)
      {
        $project = Project::with(['tasks' => function ($query) {
          $query->where('is_completed', false);
        }])->find($id);

        if(!is_null($project)){
          return $project->toJson();
        }
      }

      public function markAsCompleted(Project $project)
      {
  
        $project->is_completed = true;
        $project->update();

        if(!is_null($project)){
          return response()->json('Project updated!');
        }
      }

      public function fetchProjects()
      {
        $projects = Project::where('is_completed', true)
                    ->orderBy('updated_at', 'desc')
                    ->get();

        if(!is_null($projects)){
          return $projects->toJson(); 
          return response()->json('data found');
        }
      }

      
  }


  