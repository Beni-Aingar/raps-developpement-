<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ActualiteResource\Pages;
use App\Models\Actualite;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;

class ActualiteResource extends Resource
{
    protected static ?string $model = Actualite::class;

    protected static ?string $navigationIcon = 'heroicon-o-newspaper';
    protected static ?string $navigationLabel = 'Actualités';
    protected static ?string $modelLabel = 'Actualité';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Détails de l\'actualité')
                    ->description('Ces informations alimenteront la section actualités de la page d\'accueil.')
                    ->schema([
                        TextInput::make('titre')
                            ->label('Titre de l\'actualité')
                            ->required()
                            ->placeholder('Ex: Défense des droits des femmes')
                            ->maxLength(255),
                        
                        FileUpload::make('image')
                            ->label('Image de couverture')
                            ->directory('actualites') // Stockage dans storage/app/public/actualites
                            ->image()
                            ->required()
                            ->helperText('Format recommandé : 1200x800px pour le design asymétrique'),

                        DatePicker::make('date_publication')
                            ->label('Date de publication')
                            ->default(now())
                            ->required(),

                        RichEditor::make('contenu')
                            ->label('Corps de l\'article')
                            ->required()
                            ->columnSpanFull(),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->label('Aperçu')
                    ->circular(),
                TextColumn::make('titre')
                    ->label('Titre')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('date_publication')
                    ->label('Date')
                    ->date('d/m/Y')
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListActualites::route('/'),
            'create' => Pages\CreateActualite::route('/create'),
            'edit' => Pages\EditActualite::route('/{record}/edit'),
        ];
    }
}
