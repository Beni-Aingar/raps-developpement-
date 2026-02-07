<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjetResource\Pages;
use App\Models\Projet;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;

class ProjetResource extends Resource
{
    protected static ?string $model = Projet::class;

    // Icône qui apparaîtra dans le menu à gauche
    protected static ?string $navigationIcon = 'heroicon-o-folder-plus';
    
    protected static ?string $navigationLabel = 'Nos Projets';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    TextInput::make('titre')
                        ->label('Titre du projet')
                        ->required()
                        ->maxLength(255),

                    FileUpload::make('image')
                        ->label('Image de couverture')
                        ->image()
                        ->directory('projets') // Les images seront stockées dans storage/app/public/projets
                        ->required(),

                    RichEditor::make('description')
                        ->label('Description détaillée')
                        ->required()
                        ->columnSpanFull(),

                    TextInput::make('progression')
                        ->label('Progression du financement (%)')
                        ->numeric()
                        ->default(0)
                        ->minValue(0)
                        ->maxValue(100)
                        ->suffix('%'),
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
                    ->label('Nom du projet')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('progression')
                    ->label('Avancement')
                    ->numeric()
                    ->suffix('%')
                    ->badge()
                    ->color(fn (string $state): string => match (true) {
                        $state >= 100 => 'success',
                        $state >= 50 => 'warning',
                        default => 'danger',
                    }),

                TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
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
            'index' => Pages\ListProjets::route('/'),
            'create' => Pages\CreateProjet::route('/create'),
            'edit' => Pages\EditProjet::route('/{record}/edit'),
        ];
    }
}
