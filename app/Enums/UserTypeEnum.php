<?php

namespace App\Enums;

enum UserTypeEnum: string
{
    case SuperAdmin = 'super_admin';
    case Admin = 'admin';
    case Registrar = 'registrar';
    case Faculty = 'faculty';
    case Cashier = 'cashier';
    case Teacher = 'teacher';
    case Student = 'student';
}
