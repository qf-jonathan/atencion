from django.core.exceptions import ValidationError


def file_size(value):
    limit = 1024 * 512
    if value.size > limit:
        raise ValidationError('Archivo muy grande, el tamaño no debe exeder los 512 KiB.')
