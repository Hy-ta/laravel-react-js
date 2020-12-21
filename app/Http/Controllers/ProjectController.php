<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

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
        $project = New Project;
        $project->name = $request->name;
        $project->description = $request->description;

        $data = $project->save(); 

        if($data)
        {
          return ["Result" => "Data has been saved"]; 
        }
        else 
        {
          return ["Result" => "Operation failed."];
        }        
      }

      public function showAll(Request $request)
      {
        $project = Project::where('is_completed', '=', '0')->get();

        return $project;
      }

      public function markAsCompleted(Project $project)
      {
  
        $project->is_completed = true;
        $project->update();

        return response()->json('Project updated!');
      }
  }


  // public function submit(Request $request)
  //   {
  //       $seq = $request->SEQ;
        
  //       $user = auth()->user();

  //       $supplier = Supplier::where('SEQ', $request->SEQ)
  //           ->where('VOID_FLG', false)->first();
  //       if ($supplier) {
  //           $supplier->PARTNER_CODE = $request->PARTNER_CODE;
  //           $supplier->PARTNER_NAME = $request->PARTNER_NAME;
  //           $supplier->PARTNER_KANA = $request->PARTNER_KANA;
  //           $supplier->ADDRESS1 = $request->ADDRESS1;
  //           $supplier->ADDRESS2 = $request->ADDRESS2;
  //           $supplier->PHONE_NUMBER = $request->PHONE_NUMBER;
  //           $supplier->FAX_NUMBER = $request->FAX_NUMBER;
  //           $supplier->CUTOFF_DATE = $request->CUTOFF_DATE;
  //           $supplier->PAYMENT_MONTH = $request->PAYMENT_MONTH;
  //           $supplier->PAYMENT_DAY = $request->PAYMENT_DAY;
  //           $supplier->BILLING_FLG = $request->BILLING_FLG;
  //           $supplier->BANK_CODE = $request->BANK_CODE;
  //           $supplier->DEPOSIT_TYPE = $request->DEPOSIT_TYPE;
  //           $supplier->DISCOUNT_RATE = $request->DISCOUNT_RATE;
  //           $supplier->DISCOUNT_FLG = $request->DISCOUNT_FLG;
  //           $supplier->UPDATE_ID = $user->UPDATE_ID;
  //           $supplier->VOID_FLG = TRUE;
  //           $supplier->save();
  //       } 
  //           $data = request()->all();
  //           $data['REGIST_ID'] = $user->USER_CODE;
  //           $data['UPDATE_ID'] = $user->USER_CODE;
  //           $data['VOID_FLG'] = false;
  //           Supplier::create($data);
        
  //       return response()->json(['status' => 'success'], 200);
  //   }
    