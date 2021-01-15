<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;


class TaskController extends Controller
    {
      public function store(Request $request)
      {
        $validatedData = $request->validate(['title' => 'required']);

        $task = Task::create([
          'title' => $validatedData['title'],
          'project_id' => $request->project_id,
        ]);

        return $task->toJson();
      }

      public function markAsCompleted(Request $request)
      {
        $id = $request->query('id');

        $task = Task::where('id', $id)->update(array('is_completed' => true));

        return response()->json('Task updated!');
      }
    }

    