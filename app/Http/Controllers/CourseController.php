<?php

namespace App\Http\Controllers;

use App\Http\Requests\Course\StoreCourseRequest;
use App\Http\Requests\Course\UpdateCourseRequest;
use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::all();

        return Inertia::render('Course/index', [
            'courses' => $courses
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseRequest $storeCourseRequest)
    {
        Course::create($storeCourseRequest->validated());

        alert()->success('Success', 'Course created successfully.');

        return redirect()->route('course.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course): JsonResponse
    {
        return response()->json($course);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseRequest $updateCourseRequest, Course $course)
    {
        $course->update($updateCourseRequest->validated());

        alert()->success('Success', 'Course updated successfully.');

        return redirect()->route('course.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course): RedirectResponse
    {
        $course->delete();

        alert()->success('Success', 'Course deleted successfully.');

        return redirect()->route('course.index');
    }
}
