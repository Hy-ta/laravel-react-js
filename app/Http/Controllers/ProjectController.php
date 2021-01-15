<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

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

      public function markAsCompleted(Request $request)
      {
        $id = $request->query('id');
        $project = Project::where('id', $id)->update(array('is_completed' => true));

        return response()->json('Project updated!');
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

      public function getSearch(Request $request)
      {
            $name = $request->query('name');
        
            
            $projects = project::where('name', 'LIKE', '%'. $name .'%')  
                                  ->orderBy('created_at', 'DESC')->limit(5)->get();
              
            return $projects->toJson();
              // if(!isset($projects)){
              //     return $projects->toJson();
              // }
            
              // $projectsData = $projects->map(function($project){
              //                 return [
              //                   'name' => $project['name'],
              //                   'description' => $project['description'],
              //                   'is_completed' => $project['is_completed'],
              //                 ];
              // });
            
                 
      }
  }


  